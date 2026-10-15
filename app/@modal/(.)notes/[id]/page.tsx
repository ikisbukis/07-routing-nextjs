
import {fetchNoteById} from "@/lib/api"
import  ModalRoute from "@/components/ModalRoute/ModalRoute"
import css from "./ModalRoute.module.css"

interface NoteDetailsModalProps {
    params: Promise<{ id: string}>

}

const NoteDetailsModal = async ({params} : NoteDetailsModalProps) => {
    const {id} = await params;
    const note = await fetchNoteById(id);

    return (
        <ModalRoute>
            
          <h2>{note.title}</h2>
          <p className={css.tag}>{note?.tag}</p>
		  <p className={css.content}>{note?.content}</p>
		  <p className={css.date}>{note?.createdAt}</p>
        </ModalRoute>
    )
}

export default NoteDetailsModal