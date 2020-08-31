import React from "react";
import Navbar from '../components/navbar';

const Templates = () => {
    return (
        <div id="allTemplates">
            <Navbar />
            <h1>Templates</h1>

            <div class="row row-cols-1 row-cols-md-3 templates">

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/0/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/templates/megastore" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1015/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1033/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/0/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1015/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>

                <div class="col mb-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1033/367/267" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <a href="/" target="_blank">Ver Template</a>
                        </div>
                    </div>
                </div>


            </div> {/*fin container cards */}
        </div>
    )
}

export default Templates;