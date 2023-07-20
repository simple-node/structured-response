# API Response Classes

This repository contains classes for handling API responses in JavaScript/TypeScript. These classes provide a structured and consistent way of handling both successful and error API responses.

## APIErrorTypes

The `APIErrorTypes` constant is an object that defines the different types of errors that can be encountered in API responses. It has two properties:

- `AUTH_ERROR`: Indicates an authentication-related error.
- `API_ERROR`: Represents a general API error.

## APIErrorResponse

The `APIErrorResponse` class extends the `APIResponse` class and is used to construct error responses from the API. It takes two parameters:

- `errorType`: The type of the error. It can be one of the values defined in `APIErrorTypes`.
- `errorMessage`: An optional parameter that contains a custom error message.

### Usage:

```javascript
const errorResponse = new APIErrorResponse(APIErrorTypes.AUTH_ERROR, 'Invalid token');
```

## APISuccessResponse

The `APISuccessResponse` class extends the `APIResponse` class and is used to construct successful responses from the API. It takes a single parameter:

- `body`: The data to be included in the response body.

### Usage:

```javascript
const successResponse = new APISuccessResponse({ name: 'John', age: 30 });
```

## APIResponse

The `APIResponse` class is the base class for both error and success responses. It contains methods for setting and retrieving response data, meta information, headers, and error details.

### Methods:

- `setData(data)`: Sets the response data.
- `getData()`: Retrieves the response data.
- `setMeta(meta)`: Sets the meta information for the response.
- `getMeta()`: Retrieves the meta information.
- `setAuth(auth)`: Sets the authentication details for the response.
- `getAuth()`: Retrieves the authentication details.
- `getHeaders()`: Retrieves the response headers.
- `setHeaders(headers)`: Sets the response headers.
- `setError(errorType, errorMessage = '')`: Sets the error details for the response. Pass the `errorType` from `APIErrorTypes` and an optional custom `errorMessage`.
- `getError()`: Retrieves the error details if an error is present; otherwise, returns null.
- `toJSON()`: Converts the APIResponse instance to a JSON object.
- `static fromJSON(json)`: Creates an APIResponse instance from a JSON object.

### Usage:

```javascript
const response = new APIResponse();
response.setData({ name: 'Jane', age: 25 });
response.setMeta({ requestId: '123456' });
response.setHeaders({ 'Content-Type': 'application/json' });
response.setError(APIErrorTypes.API_ERROR, 'Internal server error');

const jsonResponse = response.toJSON();
const responseFromJson = APIResponse.fromJSON(jsonResponse);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.