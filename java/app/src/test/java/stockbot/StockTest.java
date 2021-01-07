/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package stockbot;

import org.junit.Test;

import static org.junit.Assert.*;

public class StockTest {
    @Test
    public void testGetStockInfoKospi() {
        StockInfo stockInfo = Stock.getStockInfo("키움증권");
        assertEquals(stockInfo.stockName, "키움증권");
        assertEquals(stockInfo.market, StockInfo.MARKET_KOSPI);
        assertEquals(stockInfo.code, "039490");
    }

    @Test
    public void testGetStockInfoKosdaq() {
        StockInfo stockInfo = Stock.getStockInfo("에이프로");
        assertEquals(stockInfo.stockName, "에이프로");
        assertEquals(stockInfo.market, StockInfo.MARKET_KOSDAQ);
        assertEquals(stockInfo.code, "262260");
    }

    @Test
    public void testGetStockPrice() {
        Integer price = Stock.getStockPrice("039490");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery1() {
        Integer price = Stock.getStockPriceWithQuery("키움증권");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery2() {
        Integer price = Stock.getStockPriceWithQuery("삼성전자");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery3() {
        Integer price = Stock.getStockPriceWithQuery("sk");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery4() {
        Integer price = Stock.getStockPriceWithQuery("LG디스플레이");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery5() {
        Integer price = Stock.getStockPriceWithQuery("에이프로");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQueryPreferred() {
        Integer price = Stock.getStockPriceWithQuery("삼성전자우");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQueryEtf() {
        Integer price = Stock.getStockPriceWithQuery("kodex 200");
        assertNotNull(price);
        assertTrue(price > 0);
    }

    @Test
    public void testGetStockPriceWithQuery_wrong() {
        Integer price = Stock.getStockPriceWithQuery("주식아님");
        assertNull(price);
    }
}