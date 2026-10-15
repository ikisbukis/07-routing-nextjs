import { fetchNotes } from "@/lib/api"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import NoteClient from "./Notes.client"

interface NotesProps{
    params: Promise<{slug: string[]}>
}

const Notes = async ({params} : NotesProps)  => {
    const queryClient = new QueryClient();
    const {slug} = await params;
    const tag = slug[0] === "all" ? undefined : slug[0];

    const page = 1
    const searchValue = ""

    await queryClient.prefetchQuery({
        queryKey:["notes", page, searchValue, tag],
        queryFn: () => fetchNotes({page, search: searchValue, tag})
    })

    return  <HydrationBoundary state={dehydrate(queryClient)}>
                <NoteClient tag={tag}/>
            </HydrationBoundary>  
}

export default Notes