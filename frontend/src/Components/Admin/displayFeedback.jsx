import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const DisplayComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/comments/")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des commentaires:", error);
        toast.error("Erreur lors du chargement des commentaires");
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/comments/${id}`);
      setComments(comments.filter((comment) => comment._id !== id));
      toast.success("Commentaire supprimé avec succès!");
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast.error("Erreur lors de la suppression du commentaire");
    }
  };

  return (
    <motion.div
      className="flex-1 min-h-screen bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Toaster position="top-center" />
      <motion.h2
        className="text-3xl font-bold mb-6 text-blue-400 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Liste des Commentaires
      </motion.h2>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-3 text-left text-sm font-semibold">Image Produit</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Titre Produit</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Utilisateur</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Message</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {comments.map((comment, index) => (
              <motion.tr
                key={comment._id}
                className="hover:bg-gray-750 transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <td className="px-4 py-4">
                  {comment.productId && comment.productId.image ? (
                    <motion.img
                      src={`http://localhost:5000/${comment.productId.image}`}
                      alt={comment.productId.title || "Produit"}
                      className="w-16 h-16 object-cover rounded-lg"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <span className="text-gray-400">Aucune image</span>
                  )}
                </td>
                <td className="px-4 py-4 text-sm">
                  {comment.productId ? comment.productId.title : "Produit inconnu"}
                </td>
                <td className="px-4 py-4 text-sm">
                  {comment.userId ? comment.userId.name : "Utilisateur inconnu"}
                </td>
                <td className="px-4 py-4 text-sm">{comment.content || "Aucun message"}</td>
                <td className="px-4 py-4 text-sm">
                  {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString() : "N/A"}
                </td>
                <td className="px-4 py-4">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleDelete(comment._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 text-sm"
                    >
                      Supprimer
                    </button>
                  </motion.div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DisplayComments;
