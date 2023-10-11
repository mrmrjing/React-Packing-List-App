function Item({name, isPacked}){
    let itemContent = name; // You can reassign variables defined with let
       if (isPacked){
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
       }
       return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList(){
    return (
        <section>
            <h1> PackingList</h1>
            <ul>
            <Item
                isPacked={true}
                name="Shirt"
            />
            <Item
                isPacked={true}
                name="Pants"
            />
            <Item
                isPacked={false}
                name="socks"
            />
            </ul>
        </section>
    );
}