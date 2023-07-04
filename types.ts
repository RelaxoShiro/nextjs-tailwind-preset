export type CategorySummary = Array<Category>;

export type Category = {
    name: any;
    totalAmount: number;
    totalProfit: number;
}

// https://main-backend.fly.dev/_
// ### Users

// - userID (primary key)
// - username
// - email
// - password

// ### Categories

// - categoryID (primary key)
// - category_name

// ### Invest Assets

// - assetID (primary key)
// - asset_name
// - categoryID (foreign key referencing categoryID in Categories table)
// - purchase_price
// - purchase_date
// - userID (foreign key referencing userID in Users table)