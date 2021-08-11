import React from 'react';
import {TitleBar, useRoutePropagation, ResourcePicker} from '@shopify/app-bridge-react';
import {useLocation} from 'react-router-dom';

export default function CreateNewLink(){
    let location = useLocation();
    useRoutePropagation(location);
    return(
        <div>
            <TitleBar title="Create New Link" />
            <ResourcePicker resourceType="Product" open/>
            <div class="app-page-title">
                    <div class="page-title-wrapper">
                            <div class="page-title-heading">
                                <div class="page-title-icon">
                                    <i class="pe-7s-plug icon-gradient bg-arielle-smile"></i>
                                </div>
                                <div>Create New Links
                                    <div class="page-title-subheading">Unlimited styles are available for our chart boxes. Check out our dashboard examples for more.</div>
                                </div>
                            </div>
                            <div class="page-title-actions">
                                <div class="d-inline-block dropdown">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn-shadow btn btn-info">
                                        <span class="btn-icon-wrapper pr-2 opacity-7">
                                            <i class="fa fa-business-time fa-w-20"></i>
                                        </span>
                                        Save
                                    </button>
                                </div>
                            </div>
                    </div>
            </div>
            <div className="row">
        <div className="col-md-6">
          <div className="main-card mb-3 card">
            <div className="card-body">
              <h5 className="card-title">Controls Types</h5>
              <form className>
                <div className="position-relative form-group">
                  <label htmlFor="exampleEmail" className>Email</label>
                  <input name="email" id="exampleEmail" placeholder="with a placeholder" type="email" className="form-control" />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="examplePassword" className>Password</label>
                  <input name="password" id="examplePassword" placeholder="password placeholder" type="password" className="form-control" />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleSelect" className>Select</label>
                  <select name="select" id="exampleSelect" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleSelectMulti" className>Select Multiple</label>
                  <select multiple name="selectMulti" id="exampleSelectMulti" className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleText" className>Text Area</label>
                  <textarea name="text" id="exampleText" className="form-control" defaultValue={""} />
                </div>
                <div className="position-relative form-group">
                  <label htmlFor="exampleFile" className>File</label>
                  <input name="file" id="exampleFile" type="file" className="form-control-file" />
                  <small className="form-text text-muted">This is some placeholder block-level help
                    text for the above input. It's a bit lighter and easily wraps to a new
                    line.
                  </small>
                </div>
                <button className="mt-1 btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    )
}