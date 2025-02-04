import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

// GET request handler
export async function GET() {
    await dbConnect();

    try {
        const users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
    }
}

// POST request handler
export async function POST(req: Request) {
    await dbConnect();

    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ message: 'Please provide name, email, and password' }, { status: 400 });
        }

        const newUser = new User({ name, email, password, role: 'user' });
        await newUser.save();

        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}