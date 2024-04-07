import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
    const [tittle, setTittle] = useState('')
    const [category, setCategory] = useState('UnCategorised')
    const [description, setDescription] = useState('')
    const [setThumbnail] = useState('')

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }


    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strik', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]


    const POST_CATEGORIES = ["Agriculture", "Bussiness", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Weather"]



    return (
        <section className='Crate-post-page '>
            <div className="container craete-post-container">
                <h2>Edit post</h2>
                <p className='Form_error_message'>
                    This is an error message!
                </p>
                <form className='form create_form_post'>
                    <input type="text" placeholder='Tittle' value={tittle} onChange={e => setTittle(e.target.value)} autoFocus />
                    <select name="category" value={category} onChange={e => setCategory(e.target.value)} >
                        {
                            POST_CATEGORIES.map(cat => <option key={cat} >{cat}</option>)
                        }
                    </select>
                    <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept='png , jpg , jpeg' />
                    <button type='submit' className='btn primary'>Update</button>
                </form>
            </div>

        </section>
    )
}

export default EditPost
