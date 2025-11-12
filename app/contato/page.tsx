"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { getTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContatoPage() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
  // Always call hook (React requirement), but handle errors gracefully
  let executeRecaptcha: ((action: string) => Promise<string>) | null = null;
  try {
    const recaptcha = useGoogleReCaptcha();
    executeRecaptcha = recaptcha?.executeRecaptcha || null;
  } catch (error) {
    // reCAPTCHA not configured - provider not available
    // This is expected when reCAPTCHA keys are not set
    console.debug("reCAPTCHA not available (this is OK if not configured)");
  }
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        lgpdConsent: formData.get("lgpd") === "on",
      };

      let recaptchaToken = "";
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch (err) {
          // reCAPTCHA not configured, continue without it
          console.warn("reCAPTCHA not available:", err);
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.contact.error);
      }

      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-ufcg-blue mb-8">
          {t.contact.title}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">{t.contact.name}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="email">{t.contact.email}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="subject">{t.contact.subject}</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2"
            />
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="lgpd" name="lgpd" required />
            <Label
              htmlFor="lgpd"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t.contact.lgpd}
            </Label>
          </div>
          {error && (
            <div className="text-destructive text-sm">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm">{t.contact.success}</div>
          )}
          <Button type="submit" disabled={loading}>
            {loading ? t.contact.sending : t.contact.send}
          </Button>
        </form>
      </div>
    </div>
  );
}

