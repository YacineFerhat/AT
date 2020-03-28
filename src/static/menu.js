export const Menu = [
  {
    id: 0,
    title: "Tableau de bord",
    link: "/Admin/TableauDeBord",
    state: "TBD"
  },
  {
    id: 1,
    title: "Commentaires",
    link: "/Admin/Commentaires",
    state: "Commentaires",
    subMenu: [
      {
        id: 0,
        title: "Commentaires bruts",
        state: "CommentairesBruts",
        link: "/Admin/Commentaires/CommentairesBruts"
      },
      {
        id: 1,
        title: "Commentaires épurés ",
        link: "/Admin/Commentaires/CommentairesEpuré",
        state: "CommentairesEpuré"
      }
    ]
  }
];
