import React from 'react'
import { Link } from 'react-router-dom'

export const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../public/images/segat-2.jpg" class="d-block w-100 " height="600"  alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../public/images/paro.jpg" class="d-block w-100" height="600" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="../public/images/segat-1.jpg" class="d-block w-100" height="600" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
