import axios from 'axios'
import { IComment, IPost, IUser } from '../type'

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const userAPI = {
    async getAll() {
        const response = await instance.get<Array<IUser>>('users')
        return response.data
    }
}

export const postsAPI = {
    async getByUserId(userId: number) {
        const response = await instance.get<Array<IPost>>(`posts?userId=${userId}`)
        return response.data
    },
    async getByPostId(postId: number) {
        const response = await instance.get<IPost>(`posts/${postId}`)
        return response.data
    },
    async getComments(postId: number) {
        const response = await instance.get<Array<IComment>>(`posts/${postId}/comments`)
        return response.data
    },
    async create(title: string, body: string) {
        const response = await instance.post<IPost>('posts', { title, body, userId: 1 })
        return response.data
    },
    async update(body: IPost, id: number) {
        const response = await instance.put<IPost>(`posts/${id}`, body)
        return response.data
    },
    async delete(postId: number) {
        const response = await instance.delete<number>(`posts/${postId}`)
        return response.status
    },
}