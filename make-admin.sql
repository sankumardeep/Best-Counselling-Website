-- Run this in the Supabase SQL Editor to make a user an admin
-- Replace the email with the user's email you want to make an admin

UPDATE users_profiles
SET is_admin = true
WHERE id = (
  SELECT id 
  FROM auth.users 
  WHERE email = 'sonitaniya525@gmail.com'
);

-- Verify the update
SELECT * FROM users_profiles WHERE is_admin = true;
