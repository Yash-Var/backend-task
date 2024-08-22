
# Social Media Aggregator

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
https://github.com/Yash-Var/backend-task/
```

### 2. Install Dependencies

Navigate into the project directory and install the necessary dependencies:

```bash
cd your-repo
npm install
```

### 3. Build the Project

Build the project to create a production-ready version:

```bash
npm run build
```

### 4. Start the Application

Start the application:

```bash
npm start
```

By default, the application will run on [http://localhost:3000](http://localhost:3000). You can change this by modifying the configuration.

### 5. Run Tests

To run the test suite and ensure everything is working correctly, use:

```bash
npm test
```
## API Endpoints

### 1. Aggregated Social Stats

**Endpoint:** `GET /api/social-stats`

**Description:** Returns aggregated statistics from multiple social media platforms.

**Response Example:**

```json
{
  "twitterData": [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  ],
  "instagramData": [
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
  ]
}
```

### 2. Platform-Specific Stats

**Endpoint:** `GET /api/platform/:platform`

**Description:** Returns detailed statistics for a specific social media platform.

**URL Parameters:**

    platform: The platform for which you want to fetch data. Possible values include twitter, instagram, etc.

**Response Example:**

## For Twitter:

```json

[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
]
```

## For Instagram:

```json

[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
]
```
### Additional Information

- **Configuration**: Configuration files can be found in the `config` directory.
- **Environment Variables**: Make sure to set up environment variables as required by the application. You can find the required environment variables in the `.env.example` file.
