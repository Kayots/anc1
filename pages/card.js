import Card from "../components/Card";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Card_Container from "../components/Card_Container";
import { useEffect, useState } from 'react'

export default function ANC() {
    const [query, setQuery] = useState('')
    return (
        <div>
            <Navbar />
            <Search query={query} setQuery={setQuery} />
            <Card query={query} />
        </div>
    )
}