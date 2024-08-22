
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
      "id": 1,
      "title": "Test Post",
      "content": "This is a test post from Twitter."
    }
  ],
  "instagramData": [
    {
      "id": 1,
      "title": "Test Photo",
      "url": "https://via.placeholder.com/600/92c952"
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
    "id": 1,
    "title": "Test Post",
    "content": "This is a test post from Twitter."
  }
]
```

For Instagram:

```json
[
  {
    "id": 1,
    "title": "Test Photo",
    "url": "https://via.placeholder.com/600/92c952"
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