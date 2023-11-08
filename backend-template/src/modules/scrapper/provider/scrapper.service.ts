import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer' // Make sure to import puppeteer

@Injectable()
export class ScrapperService {
    async srapp_parrent_url(divar_url){
            let browser
            const hrefResult: string[] = []
            try {
                browser  = await puppeteer.launch({ headless: 'new' }) // Use true for headless mode
                const page = await browser.newPage()
                await page.setDefaultTimeout(10000)
                await page.goto(divar_url, {
                    waitUntil: 'domcontentloaded'
                })
                while (true) {
                    await page.waitForSelector('a')
                    const Result = await page.$$eval('#post-list-container-id a',
                        elements  => elements.map(item => item.href))
                    if (!Result) {
                        break
                    }
                    hrefResult.push(Result)
                    const previousHeight  = await page.evaluate('document.body.scrollHeight')
                    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
                    await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`)
                    await page.waitForTimeout(4000)
                    console.log(previousHeight)
                    console.log(Result.length)
                }
            } catch (err) {
                console.error('Error occurred outside loop:', err)
                // Handle errors occurring outside the loop if needed
            } finally {
                if (browser) {
                    await browser.close()
                }
                return hrefResult
        }

    }

}
