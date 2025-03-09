import api from "../api/axiosInstance"

export const getAllReviews = async () => {
    const response = await api.get("/review");
    return response.data
}

export const getReviewById = async (id: number) => {
    const response = await api.get(`/review/${id}`)
    return response.data
}

export const postReview = async (userId: number, description: string, gameId: number, note: number) => {
    const response = await api.post("/review", {
        userId, 
        description,
        gameId,
        note
    });
    return response.data
}
