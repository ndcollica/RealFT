import React, { useEffect, useState } from "react";

export default function collectionModal() {   
  return (
    <div>
      <label
        htmlFor="faucet-modal"
        className="btn btn-primary btn-sm px-2 rounded-full font-normal space-x-2 normal-case"
      >
        <span>Collection</span>
      </label>
      <input type="checkbox" id="faucet-modal" className="modal-toggle" />
      <label htmlFor="faucet-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          {/* dummy input to capture event onclick on modal box */}
          <input className="h-0 w-0 absolute top-0 left-0" />
          <h3 className="text-xl font-bold mb-3">Local Faucet</h3>
          <label htmlFor="faucet-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
            ✕
          </label>
          <div className="space-y-3">
            <div className="flex space-x-4">
              <div>
                <span className="text-sm font-bold">From:</span>
              </div>
              <div>
                <span className="text-sm font-bold pl-3">Available:</span>
              </div>
            </div>
            <div className="flex flex-col space-y-3">             
                <span>Send</span>             
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
