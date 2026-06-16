import { handleForm } from "./_send.js";

export default function handler(req, res) {
  return handleForm(req, res, "contact");
}
