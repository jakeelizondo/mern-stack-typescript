const getAllSomethings = async (): Promise<any> => {
  const response = await fetch("/api/somethings");
  return await response.json();
};

const createSomething = async (data: any): Promise<any> => {
  const response = await fetch(`/api/something`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ something: data }),
  });
  return await response.json();
};

const deleteSomething = async (somethingId: number): Promise<any> => {
  const response = await fetch(`/api/something/${somethingId}`, {
    method: "DELETE",
  });
  return await response.json();
};

const editSomething = async (data: any): Promise<any> => {
  const response = await fetch(`/api/something`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ something: data }),
  });
  return await response.json();
};

export default {
  getAllSomethings,
  createSomething,
  deleteSomething,
  editSomething,
};
