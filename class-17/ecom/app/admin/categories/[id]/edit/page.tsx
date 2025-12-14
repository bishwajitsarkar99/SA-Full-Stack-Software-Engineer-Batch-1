import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { getCategoryById } from "../../actions"
import { notFound } from "next/navigation"
import { CategoryForm } from "../../category-form"

export default async function EditCategoryPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id: paramId } = await params
    const id = parseInt(paramId)
    const result = await getCategoryById(id)

    if (!result.success || !result.data) {
        notFound()
    }

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
                            <div>
                                <h1 className="text-3xl font-bold">Edit Category</h1>
                                <p className="text-muted-foreground mt-1">
                                    Update category information
                                </p>
                            </div>

                            <div className="max-w-2xl">
                                <CategoryForm category={result.data} />
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
