//TODO: Write Functions: GET, POST, UPDATE, DELETE, Requests Calls to get data from the backend.
const API_BASE_URL = "http://localhost:3000"; // Replace with your backend URL

// Define a generic response type if needed
interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

const handleResponse = async <T>(
    response: Response
): Promise<ApiResponse<T>> => {
    const data = await response.json();
    if (response.ok) {
        return data;
    } else {
        throw new Error(data.message || "An error occurred");
    }
};

// Example function to get data from the backend
export const getData = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        return await handleResponse<T>(response);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error();
    }
};

// Example function to post data to the backend
export const postData = async <T>(
    endpoint: string,
    payload: any
): Promise<ApiResponse<T>> => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return await handleResponse<T>(response);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error();
    }
};

// Add other HTTP methods (PUT, DELETE, etc.) as needed
