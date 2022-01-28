# Dicoding-OpenMusic-BE (Back-End)
## What is this ?
A queue consumer for the [dicoding-openmusic-be](https://github.com/gatraenggar/dicoding-openmusic-be) (music playlist collections app) using Node.js and RabbitMQ.
This app provides an asynchronous communication with the main server (dicoding-openmusic-be app) to export users' song playlists to the their emails.
It is defined as the completion criteria of project submission for Dicoding's Learning Back-end Application Fundamentals module.

## How to run this app in your local environment ?
### Prerequisites Apps
#### 1. RabbitMQ v.3.9.4 (*some lower versions may still works)
#### 2. Postgres (PostgreSQL) v.13.3 (*some lower versions may still works)

### Installation
#### 1. `git clone https://github.com/gatraenggar/dicoding-openmusic-queue-consumer.git`
#### 2. `cd dicoding-openmusic-queue-consumer`
#### 3. `npm install` to install the all dependencies needed

### Configuration
#### 4. Create a PostgreSQL database or use the same database with https://github.com/gatraenggar/dicoding-openmusic-be (as this app is belong to this openmusic-be app)
#### 5. Rename `example.env` to `.env`. Then change the    `db_user`, `db_password`, `db_name`, `mail_address`, & `mail_password` value in that `.env` file based on yours
### Run the App
#### 6. Make sure your RabbitMQ server is running. Then run `node src/consumer.js` to start the queue consumer
