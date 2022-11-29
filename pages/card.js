import Card from "../components/Card";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Card_Container from "../components/Card_Container";

export default function ANC() {
    return (
        <div>
            <Navbar />
            <Search />
            <Card_Container/>
            <Card />
        </div>
    )
}