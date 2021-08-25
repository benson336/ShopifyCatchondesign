import React, {useState} from 'react';
import {TitleBar, useRoutePropagation, ResourcePicker} from '@shopify/app-bridge-react';
import {useLocation} from 'react-router-dom';

export default function CreateNewLink(){
  let location = useLocation();
  useRoutePropagation(location);

    const [resourcePickerOpen, setResourcePickerOpen] = useState(true);
    const [productData, setProductData] = useState(false);

    function HandleResourcePicker(resource){
      setProductData(resource.selection[0]);
  }
  return(
          <>
            <TitleBar title="Create New Link" />
            <ResourcePicker resourceType="Product" open={resourcePickerOpen} onSelection={HandleResourcePicker}/>

            <div className={productData == false ? "app-page-title d-none" : "app-page-title"}>
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div className="page-title-icon">
                    <i className="pe-7s-plug icon-gradient bg-arielle-smile"></i>
                  </div>
                  <div>Create New Links
                    <div className="page-title-subheading">Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.</div>
                  </div>
                </div>
                <div className="page-title-actions">
                  <div className="d-inline-block dropdown">
                    <button type="button" className="btn-shadow btn btn-info">
                      <span className="btn-icon-wrapper pr-2 opacity-7">
                        <i className="fa fa-business-time fa-w-20"></i>
                      </span>Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={productData == false ? "row d-none" : "row"}>
              <div className="col-md-6">
                <div className="main-card mb-3 card">
                  <div className="card-body">
                    <h5 className="card-title">Controls Types</h5>
                    <form>
                      <div className="position-relative form-group">
                        <label htmlFor="productUrl">Product URL</label>
                        <input name="productUrl" id="productUrl" placeholder="Product Url" type="text" className="form-control" />
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="campaignSource">Campaign Source</label>
                        <input name="campaignSource" id="campaignSource" placeholder="Google, Youtube, Instagram" type="text" className="form-control" />
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="campaignMedium">Campaign Medium</label>
                        <input name="campaignMedium" id="campaignMedium" placeholder="CPC, Banner, Profile Link" type="text" className="form-control" />
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="campaignName">Campaign Name</label>
                        <input name="campaignName" id="campaignName" placeholder="50July42020, Holiday2020, Coupon123" type="text" className="form-control" />
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="campaignTerm">Campaign Term</label>
                        <input name="campaignTerm" id="campaignTerm" placeholder="Add Paid Keywords" type="text" className="form-control" />
                      </div>
                      <div className="position-relative form-group">
                        <label htmlFor="campaignContent">Campaign Content</label>
                        <input name="campaignContent" id="campaignContent" placeholder="Image, Banner" type="text" className="form-control" />
                      </div>
                      <button className="mt-1 btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="main-card mb-3 card">
                  <div className="card-body">
                    <h5 className="card-title">Product</h5>
                    <div className="row mb-3">
                      <div className='col-md-4'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1f680182116175.5d139b3ba7041.jpg" class="img-fluid"/>      
                      </div>
                      <div className='col-md-8'>
                      <h3>Fox Painting</h3>
                      </div>
                    </div>
                    <div className="position-relative form-group">
                      <h5 className="card-title">Link preview</h5>
                      <textarea name="linkPreview" id="linkPreview" placeholder="" disabled type="text" className="form-control">
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>  
  )
}