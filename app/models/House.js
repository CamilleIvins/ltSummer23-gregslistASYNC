

export class House {
    constructor(data) {
        console.log('houses model up');
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        // this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt

        this.creatorId = data.creator.id
        this.creatorName = data.creator.name
        this.creatorPicture = data.creator.picture

    }



    get houseTemplate() {
        return `       <div class="col-md-10 elevation-5 rounded my-2">
        <div class="row">
          <div class="col-md-4 p-0">
            <img class="img-fluid"
              src=${this.imgUrl}
              alt="${this.bedrooms} ${this.bathrooms}">
          </div>
          <div class="col-md-8">
            <h1 class="text-center">bd:${this.bedrooms} | ba:${this.bathrooms} | lvl:${this.levels}</h1>
            <div class="d-flex justify-content-around">
              <span>Price: $${this.price}</span>
              <span>Year Built: ${this.year}</span>
            </div>
            <p>${this.description}</p>
            <div class="d-flex align-items-center">
              <img class="creator-img"
                src=${this.creatorPicture}
                alt="${this.creatorName}">
              <span>${this.creatorName}</span>
            </div>
            </div>
            </div>
            </div>`
    }

    // <div class="my-3 d-flex justify-content-between">
    // ${this.ComputeEditButton}
    // ${this.ComputeDeleteButton}
    // </div>

    static createHouseForm() {
        return `
        
        `
    }
}