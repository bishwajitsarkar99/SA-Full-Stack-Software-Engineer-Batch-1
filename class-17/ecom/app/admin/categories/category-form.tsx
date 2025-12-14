"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { createCategory, updateCategory, type CategoryFormData } from "./actions"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

interface CategoryFormProps {
    category?: {
        id: number
        name: string
        image: string | null
    }
}

export function CategoryForm({ category }: CategoryFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const [name, setName] = useState(category?.name || "")
    const [image, setImage] = useState(category?.image || "")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState(category?.image || "")
    const router = useRouter()
    const { toast } = useToast()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
            // Create preview URL
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        } else {
            setSelectedFile(null)
            setPreviewUrl(category?.image || "") // Reset to original or empty if no file selected
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            let imageUrl = image

            // Upload file if a new file was selected
            if (selectedFile) {
                setIsUploading(true)
                const uploadFormData = new FormData()
                uploadFormData.append("file", selectedFile)

                const uploadResponse = await fetch("/api/upload", {
                    method: "POST",
                    body: uploadFormData,
                })

                const uploadResult = await uploadResponse.json()
                setIsUploading(false)

                if (!uploadResult.success) {
                    toast({
                        title: "Upload Error",
                        description: uploadResult.error || "Failed to upload image",
                        variant: "destructive",
                    })
                    setIsSubmitting(false)
                    return
                }

                imageUrl = uploadResult.url
            }

            const formData: CategoryFormData = {
                name,
                image: imageUrl || undefined,
            }

            const result = category
                ? await updateCategory(category.id, formData)
                : await createCategory(formData)

            if (result.success) {
                toast({
                    title: "Success",
                    description: category
                        ? "Category updated successfully"
                        : "Category created successfully",
                })
                router.push("/admin/categories")
                router.refresh()
            } else {
                toast({
                    title: "Error",
                    description: result.error || "Failed to save category",
                    variant: "destructive",
                })
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
            setIsUploading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle>{category ? "Edit" : "Create"} Category</CardTitle>
                    <CardDescription>
                        {category
                            ? "Update the category information below"
                            : "Fill in the details to create a new category"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Electronics, Clothing, etc."
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Category Image</Label>
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            disabled={isSubmitting}
                        />
                        <p className="text-sm text-muted-foreground">
                            Upload an image for this category (JPEG, PNG, WEBP, or GIF, max 5MB)
                        </p>
                    </div>

                    {previewUrl && (
                        <div className="space-y-2">
                            <Label>Image Preview</Label>
                            <div className="relative w-40 h-40 border rounded-lg overflow-hidden">
                                <Image
                                    src={previewUrl}
                                    alt="Category preview"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex gap-2">
                    <Button type="submit" disabled={isSubmitting || !name || isUploading}>
                        {isUploading
                            ? "Uploading..."
                            : isSubmitting
                                ? "Saving..."
                                : category
                                    ? "Update Category"
                                    : "Create Category"}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push("/admin/categories")}
                        disabled={isSubmitting || isUploading}
                    >
                        Cancel
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
