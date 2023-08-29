import { useParams } from "react-router-dom"

const facts = [
    {
        fact: "Yasu formerly had a full head of hair, but shaved it off one day and continued to do so. As such, many people jokingly called him 'Baldy.'",
        id: 1
    },
    {
        fact: "Yasu had five piercings in his left ear, one in his nose, and four in his right ear. Sometimes, he was seen with one on his eyebrow. Additionally, Yasu was also often seen wearing a scorpion ring.",
        id: 2
    },
    {
        fact: "Height: 185cm, Weight: 72kg. Eye Color: Brown",
        id: 3
    }
]

const Fact = () => {
    const param = useParams()
    const fct = facts.find(f => f.id == param.factId)
    if(!fct) {
        return (
            <div>Fact Not Found</div>
        )
    }
    return (
        <div>
            <p>{fct.fact}</p>
        </div>
    )
}

export default Fact