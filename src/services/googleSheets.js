export const submitToGoogleSheets = async (formData) => {

  const scriptURL = "https://script.google.com/macros/s/AKfycbxDELGBNcZoULwJx8S4pWUmF5B-ZLB52CGW7D--4TNMlDLT9HnlqmEdJ7cG9jcETo26/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return await response.json();

  } catch (error) {
    console.error("Error!", error);
  }
};