# How to Delete Entries in Sanity Studio

## Deleting Content in Sanity Studio

### Method 1: Delete from List View

1. **Open Sanity Studio** (`http://localhost:3333` or your deployed studio)
2. **Navigate to the content type** you want to delete (e.g., "Visita & Colaboração", "Notícia", "Publicação")
3. **Find the entry** in the list
4. **Click on the entry** to open it
5. **Click the menu button** (three dots) in the top right corner
6. **Select "Delete"** from the dropdown menu
7. **Confirm deletion** when prompted

### Method 2: Delete from Document View

1. **Open the document** you want to delete
2. **Look for the "Delete" button** in the document toolbar (usually at the top)
3. **Click "Delete"**
4. **Confirm** the deletion

### Method 3: Bulk Delete (if available)

1. **Go to the content type list**
2. **Select multiple entries** using checkboxes (if available)
3. **Use the bulk actions menu** to delete selected items

## Important Notes

- **Deletion is permanent** - Once deleted, the content cannot be recovered unless you have backups
- **The website will update automatically** - After deletion, the webhook will trigger and the content will disappear from the website
- **Draft vs Published** - Make sure you're deleting the published version, not just a draft

## Troubleshooting

**Can't find the delete button?**
- Make sure you're logged in with the correct permissions
- Some content types may have restrictions on deletion
- Check if the document is locked by another user

**Content still showing on website?**
- Wait a few seconds for the webhook to trigger
- Hard refresh your browser (Ctrl+Shift+R)
- Check if the webhook is properly configured in Sanity

