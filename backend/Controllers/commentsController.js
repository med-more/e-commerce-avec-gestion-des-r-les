const Comment = require("../Models/commentsModel"); 
const Product = require("../Models/productModel");
const User = require("../Models/userModel");

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate("product", "title image") 
      .populate("user", "name"); 
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Commentaire non trouvé" });
    }
    res.status(200).json({ message: "Commentaire supprimé avec succès!" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};
