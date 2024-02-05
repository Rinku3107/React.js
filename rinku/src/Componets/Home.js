import React from "react";
import { Link } from "react-router-dom";
function Home()
{
    return(
        <div>
        <h1>Home Page</h1>
        <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.</p>
        <Link to='/About'>Go to About Page</Link>
        </div>
    )
}
export default Home;