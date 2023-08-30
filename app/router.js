import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
  },

  {
    path: '#/houses',
    controller: HousesController,
    view: `

    <div class="container-fluid">
    <section class="row">
    <button class="btn btn-info col-md-3 col-12" data-bs-toggle="collapse" data-bs-target="#houseFormCollapse">
    List Homes! <i class="mdi mid-home-heart"></i>
    </button>

    <div class="collapse" id="houseFormCollapse">
      <form class="row p-2" onsubmit="app.HousesController.createHouse()">

        <div class="form-floating mb-3 col-2">
          <input required type="number" class="form-control" id="houseBeds" name="bedrooms" placeholder="Bedrooms">
          <label for="houseBeds"># of Bedrooms</label>
        </div>

        <div class="form-floating mb-3 col-2">
          <input required type="number" class="form-control" id="houseBaths" name="bathrooms" placeholder="Bathrooms">
          <label for="houseBaths"># of Bathrooms</label>
        </div>

        <div class="form-floating mb-3 col-2">
          <input required type="number" class="form-control" id="houseLevels" name="levels"
            placeholder="House levels">
          <label for="houseLevels"># of Levels</label>
        </div>

        <div class="form-floating mb-3 col-2">
          <input required type="number" class="form-control" id="houseYear" name="year" placeholder="House Year">
          <label for="houseYear">Year Built</label>
        </div>

        <div class="form-floating mb-3 col-6">
          <input required type="number" class="form-control" id="housePrice" name="price" placeholder="House Price">
          <label for="housePrice">Asking Price</label>
        </div>

        <div class="form-floating mb-3 col-12">
          <input required type="text" class="form-control" id="houseimgUrl" name="imgUrl" placeholder="House imgUrl">
          <label for="houseimgUrl">House Image Url</label>
        </div>

        <div class="form-floating">
          <textarea required maxLength="500" class="form-control" placeholder="Please add a description fo this house"
            name="description" id="houseDescription" style="height: 100px"></textarea>
          <label for="houseDescription">House Description</label>
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-info">Create Listing</button>

        </div>


      </form>
    </div>
    <section class="row justify-content-center" id="houses">
    </section>`
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */