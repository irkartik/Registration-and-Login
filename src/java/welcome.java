/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

/**
 *
 * @author Raj
 */
public class welcome extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String firstname= null;
        String name = request.getParameter("username");
        
        try{
        Class.forName("com.mysql.jdbc.Driver");
        Connection  con = DriverManager.getConnection
                     ("jdbc:mysql://localhost:3306/database","root","toor");
        PreparedStatement s = con.prepareStatement("select firstname from users where username = ?");
        s.setString(1, name);
        
        ResultSet rs = s.executeQuery();
        if (rs.next())
            firstname =  rs.getString("firstname");
        
        }catch (Exception se)
        {
            se.printStackTrace();
        }
        
        out.println("<p class='login'>Welcome Back " + firstname +"</p>");
        out.println("<a href='logout'>Logout!</a>");
    }
}
