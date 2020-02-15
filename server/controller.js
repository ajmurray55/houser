let id = 3;

let houses = [
   { houseId: 1, property_name: 'Triplex', address: '4567 S Road St', city: 'Orem', state: 'UT',     zip: 84097 },
   { houseId: 2, property_name: 'Duplex', address: '456 E Bakers St', city: 'Salt Lake City', state: 'UT', zip: 84091}
]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(houses)
    },
    addOne: /*(req, res) => {*/
        // const { name } = req.params;
        // const newHouse = {
        //     houseId: id,
        //     property_name: name
        // };
        // houses.push(newHouse);
        // id++
        // res.status(200).send(houses)

        (req, res) => {
            const { name } = req.params;
    
            const newHouse = houses.findIndex( houses => houses.id === id)
    
            if ( houses !== -1 ) {
                const selectedSwag = houses[newHouse];
    
                name.cart.push(selectedSwag);
                name.total += selectedSwag.price
    
                res.status(200).send(name);
            }
    },
    delete: (req,res) => {
        const houseId = +req.params.houseId;
        
        const foundHouseIndex = houses.findIndex(
            house => house.houseId === houseId
        );
        houses.splice(foundHouseIndex, 1);
        res.status(200).send(houses);
    }
}