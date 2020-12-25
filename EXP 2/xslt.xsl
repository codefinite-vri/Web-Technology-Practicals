<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <center>
  <h2>BOOK INVENTORY</h2>
  <table border="1">
    <tr bgcolor=" #D3D3D3">
      <th style="text-align:left">Title of the Book</th>
      <th style="text-align:left;">Author Name</th>
      <th style="text-align:left">ISBN-13 Number</th>
      <th style="text-align:left">Publisher Name</th>
      <th style="text-align:left">Edition</th>
      <th style="text-align:left">Price</th>
    </tr>
    <xsl:for-each select="book/cd">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td style="color:#000080; text-transform:uppercase; font-weight:bold;"><xsl:value-of select="author"/></td>
      <td><xsl:value-of select="isbn"/></td>
      <td><xsl:value-of select="publisher"/></td>
      <td><xsl:value-of select="edition"/></td>
      <td><xsl:value-of select="price"/></td>
    </tr>
    </xsl:for-each>
  </table>
  </center>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

