/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.logging.Level;
import java.util.logging.Logger;


/**
 *
 * @author Raj
 */
public class register extends HttpServlet {

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
            /* TODO output your page here. You may use following sample code. */
                
        String firstname = request.getParameter("firstname");
        String lastname = request.getParameter("lastname");
        String email = request.getParameter("email");
        String mobile =  request.getParameter("mobilenumber");
        String grad = request.getParameter("graduation");
        String postgrad = request.getParameter("postgraduation");
        String address = request.getParameter("address");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        String dob = request.getParameter("dob");
        java.sql.Date sqlDate =  java.sql.Date.valueOf(dob);
        
        
        
        
        
        
        
        
         try{
        
        //loading drivers for mysql
        Class.forName("com.mysql.jdbc.Driver");

	//creating connection with the database 
          Connection  con = DriverManager.getConnection
                     ("jdbc:mysql://localhost:3306/database","root","toor");

        PreparedStatement ps = con.prepareStatement
                  ("insert into users values(?,?,?,?,?,?,?,?,?,?)");
        


        
        ps.setString(1, firstname);
        ps.setString(2, lastname);
        ps.setString(3, email);
        ps.setString(4, mobile);
        ps.setString(5, grad);
        ps.setString(6, postgrad);
        ps.setString(7, address);
        ps.setString(8, username);
        ps.setString(9, password);
        ps.setDate(10, sqlDate);
        
        int i = ps.executeUpdate();
        
          if (i>0)
          {
            request.setAttribute("username", username);
            request.setAttribute("password", password);
            request.getRequestDispatcher("/WEB-INF/registered.jsp").forward(request, response);
          }
        
        }
        catch (Exception se)
        {
            se.printStackTrace();
        }
	
      }
  }
