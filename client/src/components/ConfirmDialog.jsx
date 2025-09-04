import { useState } from "react";

export default function ConfirmDialog({ triggerText, message, onConfirm }) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className=" px-2 py-1 w-14 border-b-2 border-l-2 mt-4 mb-4
        border-[#b45639ff] hover:bg-[#b45639ff] text-gray-700 rounded text-xs "
      >
        {triggerText}
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full">
            <p className="mb-4 text-gray-800">{message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleConfirm}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
