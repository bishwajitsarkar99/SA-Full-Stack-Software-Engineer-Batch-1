import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getCategories } from "./actions"
import Link from "next/link"
import Image from "next/image"
import { DeleteCategoryButton } from "./delete-category-button"

export default async function CategoriesPage() {
    const result = await getCategories()

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-bold">Categories</h1>
                                    <p className="text-muted-foreground mt-1">
                                        Manage product categories
                                    </p>
                                </div>
                                <Button asChild>
                                    <Link href="/admin/categories/create">
                                        Create Category
                                    </Link>
                                </Button>
                            </div>

                            {result.success && result.data ? (
                                <div className="border rounded-lg">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Image</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Products</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {result.data.length === 0 ? (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={4}
                                                        className="text-center py-8 text-muted-foreground"
                                                    >
                                                        No categories found. Create one to get started.
                                                    </TableCell>
                                                </TableRow>
                                            ) : (
                                                result.data.map((category) => (
                                                    <TableRow key={category.id}>
                                                        <TableCell>
                                                            {category.image ? (
                                                                <Image
                                                                    src={category.image}
                                                                    alt={category.name}
                                                                    width={40}
                                                                    height={40}
                                                                    className="rounded object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">
                                                                    No image
                                                                </div>
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="font-medium">
                                                            {category.name}
                                                        </TableCell>
                                                        <TableCell>{category._count.products}</TableCell>
                                                        <TableCell className="text-right space-x-2">
                                                            <Button asChild variant="outline" size="sm">
                                                                <Link href={`/admin/categories/${category.id}/edit`}>
                                                                    Edit
                                                                </Link>
                                                            </Button>
                                                            <DeleteCategoryButton
                                                                id={category.id}
                                                                name={category.name}
                                                                productCount={category._count.products}
                                                            />
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            )}
                                        </TableBody>
                                    </Table>
                                </div>
                            ) : (
                                <div className="border rounded-lg p-8 text-center text-destructive">
                                    {result.error || "Failed to load categories"}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
