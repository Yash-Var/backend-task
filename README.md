
# Social Media Aggregator

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
    {
    "albumId": 1,
      "id": 1,

    "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
 "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }
    
  }
  ]
}
```

**Notes:**
- Ensure you have a valid API key in the request headers.
- The response contains combined data from various social media platforms.

### 2. Platform-Specific Stats

**Endpoint:** `GET /api/platform/:platform`

**Description:** Returns detailed statistics for a specific social media platform.

**URL Parameters:**
- `platform`: The platform for which you want to fetch data. Possible values include `twitter`, `instagram`, etc.

**Response Example:**

For Twitter:

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

For Instagram:

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

**Notes:**
- Replace `:platform` with the desired platform name.
- Ensure you have a valid API key in the request headers.
- The response will include detailed stats specific to the chosen platform.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript files:

   ```bash
   npm run build
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Run tests:

   ```bash
   npm test
   ```

## Authentication

This project implements a simple authentication mechanism using an API key. Make sure to include a valid API key in the request headers when making API calls.

--- 

This README section should help others understand how to set up, run, and use your project effectively.