# Project: Vocab-U-lary
## Primary Features
- [ ] Users are able to create, render to DOM, update, and delete vocabulary entries and their respective categories the entries are catogorizeed in.
- [ ] Dynamically filter on the entry term to easily search through entries. 
- [ ] Multi client application applies to own user creations. Not able to access other's users data.
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 

# MVP Requirements
[MVP Wireframe](https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP)
- [ ] An ERD of your data
- [ ] Use Firebase for DB and authentication
- [ ] Technical Flow chart (timebox this)
- [ ] The app has a navigation bar
  - [ ] A logo
  - [ ] Logout button
  - [ ] Create Entry
  - [ ] Any other options you would like to add

**The most basic requirement for this project is that a user can:**
- [ ] Login and Logout of the application using Firebase Google Authentication
- [ ] only see the vocabulary entries that they created
- [ ] CREATE a vocabulary entry:
  - [ ] Title
  - [ ] Definition
  - [ ] Language/Tech
  - [ ] Time submitted - Not on form. Handle in your JS
  - [ ] user ID - Not on form. Pull from User object.
- [ ] READ THIER entries
- [ ] UPDATE THEIR entries
- [ ] DELETE THEIR entries
- [ ] Filter by language/tech
- [ ] Style your application using your own creativity!
- [ ] No errors - linters should be clean

## Stretch 1
[Stretch 1 Wireframe](https://www.figma.com/file/yZE38QzpoUWELA22gGZJve/Stretch-1)
- [ ] Allow users to order entries alphabetically, newest, oldest

## Stretch 2
[Stretch 2 Wireframe](https://www.figma.com/file/UC3Gi8HFRkZY8OIMOAUgL4/Stretch-2)
- [ ] Users can search vocabulary entries
- [ ] Users can add Language/Tech to the database and refrerence it on their vocabulary entries
- [ ] Users can only see the Languages/Tech categories that they created

## Stretch 3
[Stretch 3 Wireframe](https://www.figma.com/file/KgbkfaoRd5F8Q4qZ3G2Bg2/Stretch-3)
- [ ] Users can mark an entry as public or private
- [ ] Create a new navigation item called "Community" and on click of this item, users can see all the public entries
- [ ] If an entry is public, anyone can READ it. If it is private, only the user who created it can see it.
- [ ] If an entry is public, only the user who created it can CRUD on it
- [ ] If an entry is public, any user can copy the entry to their own set of entries and then CRUD on the new/copied entry
