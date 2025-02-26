import Post from '@/models/post';
import { connectToDB } from '@/utils/database';

export async function GET() {
    // Handle GET request to fetch all posts

    await connectToDB();
    try {
        const posts = await Post.find();
        // res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function POST(newPost: any) {
    await connectToDB()
        .then(() => console.log('connected'))
        .catch(err => console.log('err'));
    await Post.create({
        title: newPost.title,
        description: newPost.description,
        topic: newPost.topic,
        tags: newPost.tags,
        content: newPost.content,
    });
    //await Post.create(newPost);
}
