import React from "react";

const ModalProducts = () => {
    return(
        <div className="modal fade" id="modalProducts" tabIndex="-1" aria-labelledby="modalProductsLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="modalProductsLabel">Add Products</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                {/* Fill Input Modals */}

                {/* Name */}
                <div className="mb-3 row">
                    <label htmlFor="inputNama" className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputNama"/>
                    </div>
                </div>

                {/* Brand */}
                <div className="mb-3 row">
                <label htmlFor="inputBrabnd" className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputBrabnd"/>
                </div>
                </div>

                {/* Stock */}
                <div className="mb-3 row">
                    <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="number" min={0} className="form-control" id="inputDescription"/>
                    </div>
                </div>

                {/* Base Price */}
                <div className="mb-3 row">
                    <label htmlFor="inputBasePrice" className="col-sm-2 col-form-label">Base Price</label>
                    <div className="col-sm-10">
                        <input type="number" min={0} className="form-control" id="inputBasePrice"/>
                    </div>
                </div>

                {/* Price Eceran */}
                <div className="mb-3 row">
                    <label htmlFor="inputPriceEceran" className="col-sm-2 col-form-label">Price Eceran</label>
                    <div className="col-sm-10">
                        <input type="number" min={0} className="form-control" id="inputPriceEceran"/>
                    </div>
                </div>

                {/* Price Grosir */}
                <div className="mb-3 row">
                    <label htmlFor="inputPriceGrosir" className="col-sm-2 col-form-label">Price Grosir</label>
                    <div className="col-sm-10">
                        <input type="number" min={0} className="form-control" id="inputPriceGrosir"/>
                    </div>
                </div>

                {/* Image */}
                <div className="mb-3 row">
                    <label htmlFor="inputImage" className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputImage"/>
                    </div>
                </div>

                {/* Type */}
                <div className="mb-3 row">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-2">
                                <label for="productType">Type</label>
                            </div>
                            <div class="col-sm-10">
                                <select class="form-control" id="productType">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Fill Input Modals */}

            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
            </div>
        </div>
    </div>
    )
}

export default ModalProducts