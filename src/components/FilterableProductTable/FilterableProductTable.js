import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";


function FilterableProductTable (){
    return (
        <div>
            <SearchBar/>
            <ProductTable/>
        </div>
    );
}

export default FilterableProductTable