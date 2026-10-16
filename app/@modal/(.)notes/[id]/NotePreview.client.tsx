"use client"

import {fetchNoteById} from "@/lib/api"
import  ModalRoute from "@/components/ModalRoute/ModalRoute"
import css from "./ModalRoute.module.css"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"


const NotePreviewClient = () => {
        const {id} = useParams<{id:string}>()

        const {data: note} = useQuery({
            queryKey: ['notePreview', id],
            queryFn: () => fetchNoteById(id),
            refetchOnMount: false
        })

        return (
        <ModalRoute>
          <h2>{note?.title}</h2>
          <p className={css.tag}>{note?.tag}</p>
		  <p className={css.content}>{note?.content}</p>
		  <p className={css.date}>{note?.createdAt}</p>
        </ModalRoute>
    )
}

export default NotePreviewClient