import { NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get("file") as File | null

        if (!file) {
            return NextResponse.json(
                { success: false, error: "No file provided" },
                { status: 400 }
            )
        }

        // Validate file type
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { success: false, error: "Invalid file type. Only images are allowed." },
                { status: 400 }
            )
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024
        if (file.size > maxSize) {
            return NextResponse.json(
                { success: false, error: "File too large. Maximum size is 5MB." },
                { status: 400 }
            )
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Generate unique filename
        const timestamp = Date.now()
        const random = Math.random().toString(36).substring(7)
        const ext = file.name.split(".").pop()
        const filename = `category-${timestamp}-${random}.${ext}`

        // Save to public/uploads directory
        const uploadsDir = join(process.cwd(), "public", "uploads", "categories")
        const filepath = join(uploadsDir, filename)

        // Create directory if it doesn't exist
        await writeFile(filepath, buffer)

        // Return the public URL
        const url = `/uploads/categories/${filename}`

        return NextResponse.json({
            success: true,
            url,
        })
    } catch (error) {
        console.error("Error uploading file:", error)
        return NextResponse.json(
            { success: false, error: "Failed to upload file" },
            { status: 500 }
        )
    }
}
