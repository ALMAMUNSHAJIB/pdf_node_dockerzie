const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');
const data = require('../helpers/data');



const homeView = async(req, res, next) => {
    res.render('home')
};

const genaratePdf = (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, '../views/template.html'), 'utf-8');
    const fileName = Math.random() + '_doc' + '.pdf';

    let array = [];
    data.forEach(d => {
        const prod = {
            name: d.name,
            description: d.description,
            unit: d.unit,
            quantity: array.quantity,
            price: d.price,
            total: d.quqntity * d.price
        };

        array.push(prod);
    });

    let subtotal = 0;
    array.forEach(i => {
        subtotal += i.total
    });

    const tax = (subtotal * 20) / 100;
    const grandtotal = subtotal - tax;
    const obj  = {
        prodlist: array,
        subtotal: subtotal,
        tax: tax,
        gtotal: grandtotal
    };

    const document = {
        html: html,
        data: {
            products: obj

        },
        path: './docs/' + fileName

    }

    pdf.create(document, options)
      .then(() => {
        console.log(res);
      }).catch((err) => {
         console.log(err);
      })

  const filePath = 'http://localhost:8080/docs/' + fileName
  res.render('download', {
    path: filePath
  })
}

module.exports = {
    homeView,
    genaratePdf
}