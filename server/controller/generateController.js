import main from "../configs/gemini.js";

export const generateContentController = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(prompt);
    res.json({ success: true, content })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}