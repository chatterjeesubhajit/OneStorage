# OneStorage

##Inspiration

With ever increasing dependency on cloud storage to storage and share data across devices, handling multiple cloud drives can get tedious. Also, managing files across drives and remembering which file is stored where is a painful task. A single interface to manage all cloud storage drives at one place shall be easier to handle!

##What it does

This web based application allows users to link their drives (Google Drive, Microsoft OneDrive, Dropbox) and manage, i.e. upload, search, read, delete their files across drives all at one place. The use gets a cumulative view of all drives together - a single large scaled up drive!

1. Drive Addition 
    - User allows a read/write access to their drive in offline mode ( application tracks changes to the drive even when the user is not logged in to store the latest changes in metadata) to provide most accurate and latest collection of files to user
    
2. File Read:
    - The application only stores the metadata of the files, hence ,no user data is getting stored, only file , metdata is stored with application database.
    - Also, it tracks any changes made to the drive in offline, update the stored metadata and send update to client via websockets in real time
    - User can choose to filter out the files by their media types , e.g. PDF, SpreadSheet, Audio, Video , etc. In total files are classified in 12 categories 
    - User can also search for a particular file by name using the auto-complete search option provided
    - Files are opened through the linked drive only, assures secure access of the files!

3. File Upload:
    - User uploads a file and the application uses a round robin approach to choose which of the linked drives the file will be uploaded to - maintains a equitable usage of all drives 
    - As soon as the file is uploaded, the delta changes are tracked from the drive and changes are emitted as event to client via web sockets - user gets to view their uploaded file immediately on the application

4. File Delete:
    - File to be deleted is removed from the drive where it was uploaded and upon successful deletion , the metadata of the file is also removed from the application database
    - Simultaneously user interface is refreshed with the changes ( by removing the deleting file from listing)

5. Drive delete:
    - User can choose to remove a linked drive any time as he/she wishes- The drive metadata and access token is removed from the application database
    - The user can also remove the application access from their drive settings (e.g. [Google drive third party access removal](https://myaccount.google.com/permissions) )  to reset application permissions


##How I built it

This application is built using :
- Node.js to build the backend server environment, along with ExpressJS framework to design the backend   application layer 
- MongoDB as database to store drive and file metadata for users
- React library to design the client end interface which is the served as static build



