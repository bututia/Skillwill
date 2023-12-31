const data = {
    book_title: "And Then There Were None",
    book_description: "First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion: 'Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four. Four little boys going out to sea; A red herring swallowed one and then there were three. Three little boys walking in the zoo; A big bear hugged one and then there were two. Two little boys sitting in the sun; One got frizzled up and then there was one. One little boy left all alone; He went out and hanged himself and then there were none.' When they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Before the weekend is out, there will be none. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion.",
    characters: [
        {
            id: 1,
            name: "Judge Lawrence Wargrave"
        }
        ,
        {
            id: 2,
            name: "Vera Claythorne"
        }
        ,
        {
            id: 3,
            name: "Philip Lombard"
        }
        ,
        {
            id: 4,
            name: "Dr. Edward George Armstrong"
        }
        ,
        {
            id: 5,
            name: "William Henry Blore"
        }
        ,
        {
            id: 6,
            name: "Emily Brent"
        }
        ,
        {
            id: 7,
            name: "General John Gordon Macarthur"
        }
        ,
        {
            id: 8,
            name: "Thomas Rogers"
        }
        ,
        {
            id: 9,
            name: "Ethel Rogers"
        }
        ,
        {
            id: 10,
            name: "Anthony Marston"
        }
    ],
    book_poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638425885i/16299.jpg"
}


function Book() {
    return <div className="container">
            <div className="poster">
            <img src={data.book_poster} alt={data.book_title} />
            </div>
            <div className="bookInfo">
                <h1>{data.book_title}</h1>
                <p>{data.book_description}</p>
                    <h3>Main Characters :</h3>
                    <div>
                        {data.characters.map((name) => {return <span key={name.id}>{name.name}</span>})}
                    </div>
            </div>
        </div>
    
}

export default Book